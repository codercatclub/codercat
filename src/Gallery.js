/* global window */
import React, { Component } from 'react';
import styled from 'styled-components';
import LazyImage from './components/LazyImage';
import galleryCategories from './constants/gallery.json';

const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: ${({ height }) => `${height}px`}
`;

const SideMenu = styled.div`
  width: 300px;
`;

const MenuTitle = styled.div`
  font-family: 'Ubuntu Mono', monospace;
  font-size: 44px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MenuItemsContainer = styled.div`
  position: fixed;
  top: 40px;
  left: 30px;
`;

const MenuItem = styled.div`
  display: flex;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 24px;
  padding-bottom: 6px;
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  color: ${({ selected }) => (selected ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.5)')};
  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

const ImageFeed = styled.div`
  flex: 1;
  padding-bottom: 100px;
`;

const StyledLazyImage = styled(LazyImage)`
  // margin-bottom: 2px;
`;


class Gallery extends Component {
  constructor(props) {
    super(props);

    const initialCategory = 0;
    galleryCategories[initialCategory].load = true;
    galleryCategories[initialCategory].loadProxy = true;

    this.state = {
      categories: galleryCategories,
      curCategory: initialCategory,
      // preloadCategory: initialCategory,
      ticking: false,
    };
    this.imageFeed = null;
    this.loadedImages = [];

    this.handleScroll = this.handleScroll.bind(this);
    this.handleMenuItemPress = this.handleMenuItemPress.bind(this);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  changeCategory(scrollPos) {
    const { categories } = this.state;
    let curCategory = 0;
    let preloadCategory = 0;

    for (let i = 0; i < categories.length; i += 1) {
      const categoryPos = this.relativeCategoryPos(categories[i].accum_height);

      if (scrollPos >= (categoryPos - (window.innerHeight / 2))) {
        curCategory = i;
      }
      if (scrollPos > (categoryPos - window.innerHeight)) {
        preloadCategory = i;
      }
    }

    const newCategories = JSON.parse(JSON.stringify(categories));
    newCategories[curCategory].load = true;
    newCategories[curCategory].loadProxy = true;
    newCategories[preloadCategory].load = true;
    newCategories[preloadCategory].loadProxy = true;

    this.setState({
      categories: newCategories,
      curCategory,
      // preloadCategory,
    });
  }

  handleScroll() {
    const scrollPos = window.scrollY;
    const { ticking } = this.state;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.changeCategory(scrollPos);
        this.setState({ ticking: false });
      });

      this.setState({ ticking: true });
    }
  }

  handleMenuItemPress(i) {
    const { categories } = this.state;
    const categoryPos = this.relativeCategoryPos(categories[i].accum_height);
    window.scrollTo(0, categoryPos);
  }

  relativeCategoryPos(accumHeight) {
    let result = null;

    if (this.imageFeed) {
      result = (this.imageFeed.offsetWidth * accumHeight) / 1920;
    }

    return result;
  }

  render() {
    const images = [];
    const menuItems = [];
    const { categories, curCategory } = this.state;

    for (let i = 0; i < categories.length; i += 1) {
      const category = categories[i];
      const selected = curCategory === i;

      menuItems.push((
        <MenuItem
          onClick={() => this.handleMenuItemPress(i)}
          key={category.name}
          selected={selected}
        >
          {category.name.replace('-', ' ').toUpperCase()}
        </MenuItem>
      ));

      for (let j = 0; j < category.images.length; j += 1) {
        const image = category.images[j];
        images.push((
          <StyledLazyImage
            key={`${category.name}/${image.name}`}
            src={`img/gallery/${category.name}/${image.name}`}
            proxy={`img/gallery/${category.name}/${image.proxy}`}
            height={((window.innerWidth - 300) * image.height) / 1920}
            load={category.load}
            loadProxy={category.loadProxy}
          />
        ));
      }
    }

    return (
      <GalleryContainer
        height={
          ((window.innerWidth) * categories[categories.length - 1].accum_height) / 1920
        }
      >
        <SideMenu>
          <MenuItemsContainer>
            <MenuTitle>CATPIX</MenuTitle>
            {menuItems}
          </MenuItemsContainer>
        </SideMenu>
        <ImageFeed innerRef={(el) => { this.imageFeed = el; }}>
          {images}
        </ImageFeed>
      </GalleryContainer>
    );
  }
}

export default Gallery;

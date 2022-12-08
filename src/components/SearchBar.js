import React, { useState } from "react";

import "./SearchBar.css";
import * as Icon from "react-feather";

function SearchBar({ placeholder, data }) {
  //   data = {
  //     searchResultWrapper: ".search-result-wrapper", // Class for search result wrapper
  //     inputField: ".search-box", // Class for your input
  //     categoryLink: ".category-link",
  //     alternativeLinkClass: "even", //[do not put . before that] Class for Sytling even/odd item differently
  //     targetSearchItem: ".target-search-item", // Class of text you want to search(Most the name of categorys.)
  //     baseURL: "https://autocomplete-search-box.webflow.io/category/", //Url the category append to E.g https://autocomplete-search-box.webflow.io/category/{This will be add by code}
  //   };
  //   var categoriesList = $(data.targetSearchItem)
  //     .map(function () {
  //       return $(this).text().toLowerCase().trim();
  //     })
  //     .get();
  //   var categoryLink = $(".category-link").first();
  //   $(data.searchResultWrapper).empty();
  //   $(data.searchResultWrapper).show();
  //   $(data.inputField).on("keyup focus", function () {
  //     let currentTicket = $(this).val();
  //     if (currentTicket.length > 0) {
  //       let tempticketToFilter = currentTicket.match(/.{1}/g).join(".*");
  //       let ticketToFilter = new RegExp(".*" + tempticketToFilter + ".*");
  //       let filteredList = categoriesList
  //         .filter(function (categry) {
  //           return ticketToFilter.test(categry);
  //         })
  //         .map(function (filtercategory, index) {
  //           let hrefOfCategory = data.baseURL + filtercategory.replace(/ /g, "-");
  //           let tempCategoryItem = categoryLink.clone();
  //           tempCategoryItem.text(filtercategory);
  //           tempCategoryItem.attr("href", hrefOfCategory);
  //           if (index % 2 === 0) {
  //             tempCategoryItem.addClass(data.alternativeLinkClass);
  //             console.log(index);
  //           }
  //           return tempCategoryItem;
  //         });
  //       show_result(filteredList);
  //     } else {
  //       $(data.searchResultWrapper).empty();
  //     }
  //   });
  //   function show_result(list) {
  //     $(data.searchResultWrapper).empty();
  //     if (list.length) {
  //       $(data.searchResultWrapper).append(list);
  //     } else {
  //       let noResultItem = categoryLink.clone();
  //       noResultItem.text("No element found");
  //       $(data.searchResultWrapper).append(noResultItem);
  //     }
  //   }
  //   $("#search-form").bind("keypress", function (e) {
  //     if (e.keyCode === 13) {
  //       e.preventDefault();
  //       return false;
  //     }
  //   });

  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <div>
      <div className="container">
        <img
          src={require(`./images/unnamed-1.png`)}
          loading="lazy"
          width="225"
          sizes="225px"
          alt=""
          className="image-4-copy"
        />
        <h1 className="heading-2">Black History Archive System</h1>
        <a
          href="https://blackhistorydao-4dc6cb.netlify.live/"
          className="w-inline-block"
        >
          <img
            src={require(`./images/BHM-2022-web-header.png`)}
            loading="lazy"
            width="932"
            sizes="(max-width: 991px) 100vw, 932px"
            alt=""
            className="image-4"
          />
        </a>
        <div className="auto-search-wrapper">
          <div className="form-block w-form">
            <form
              id="search-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              className="form"
            >
              <div className="inputs">
                <input
                  type="text"
                  className="search-box w-input"
                  autofocus="true"
                  name="Search"
                  data-name="Search"
                  placeholder={placeholder}
                  id="Search"
                  required=""
                  onChange={handleFilter}
                />

                <Icon.Search className="searchIcon" />
              </div>
              <div className="search-result-wrapper">
                {filteredData.slice(0, 15).map((value, key) => {
                  return (
                    <a
                      className="category-link w-inline-block"
                      href={value.link}
                      target="_blank"
                    >
                      <div className="category-text">{value.title}</div>
                    </a>
                  );
                })}
                {/* <a href="#" className="category-link w-inline-block">
                  <img
                    src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                    loading="lazy"
                    alt=""
                    className="image-2"
                  />
                  <div className="category-text">Here goes category text</div>
                </a>
                <a href="#" className="category-link w-inline-block">
                  <img
                    src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                    loading="lazy"
                    alt=""
                    className="image-2"
                  />
                  <div className="category-text">Here goes category text</div>
                </a>
                <a href="#" className="category-link w-inline-block">
                  <img
                    src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
                    loading="lazy"
                    alt=""
                    className="image-2"
                  />
                  <div className="category-text">Here goes category text</div>
                </a> */}
              </div>
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

import { useEffect, useRef, useState } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
// import axios from "axios";

import * as searchService from "~/Service/SearchService";
import AccountItem from "../Accounts/AccountItem";
import ProperWrapper from "~/components/Propers/Wrapper";
import { SearchIcon } from "~/components/Icons/Icons";
import Style from "~/css/Search/Search.module.scss";
import useDebounce from "~/hooks/useDebounced";
const cs = classNames.bind(Style);

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const debounced = useDebounce(searchInput, 500);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      //   console.log(searchResult.length)
      return;
    }

    // api thuan
    // setLoading(true);
    // fetch(
    //   `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
    //     debounced
    //   )}&type=less`
    // )
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setSearchResult(res.data);
    //     // console.log(res.data);
    //     loading(false);
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });

    // axios
    // axios
    //   .get(`https://tiktok.fullstack.edu.vn/api/users/search`, {
    //     params: {
    //       q: debounced,
    //       type: "less",
    //     },
    //   })
    //   .then((res) => {
    //     // console.log(res.data.data);
    //     setSearchResult(res.data.data);
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });

    //api service
    const fetchAPI = async () => {
      setLoading(true);
      const result = await searchService.search(debounced);
      // console.log(result);
      setSearchResult(result);
      setLoading(false);
    };
    fetchAPI();
  }, [debounced]);

  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleClearReseult = () => {
    setSearchInput("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      onClickOutside={handleHideResult}
      render={(attrs) => (
        <div className={cs("search-result")} tabIndex="-1" {...attrs}>
          <ProperWrapper>
            <h4 className={cs("search-title")}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </ProperWrapper>
        </div>
      )}
    >
      <div className={cs("search")}>
        <input
          ref={inputRef}
          value={searchInput}
          placeholder="Search accounts and videos"
          spellCheck="false"
          onFocus={() => {
            setShowResult(true);
          }}
          onChange={(e) => {
            setSearchInput(e.target.value);
            // console.log(e.target.value);
          }}
        />
        {!!searchInput && !loading && (
          <button className={cs("search-cls")} onClick={handleClearReseult}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={cs("search-loading")} icon={faSpinner} />
        )}
        <button className={cs("search-btn")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

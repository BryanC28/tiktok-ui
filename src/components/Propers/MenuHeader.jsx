import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import style from "~/css/Propers/Menu.module.scss";
const cs = classNames.bind(style);

export default function MenuHeader ({title, onBack}) {
    return ( 
        <header className={cs('header')}> 
            <button className={cs('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cs('header-title')}>{title}</h4>
        </header>
     );
}

MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};


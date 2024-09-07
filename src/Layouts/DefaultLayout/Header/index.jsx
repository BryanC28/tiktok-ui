import classNames from "classnames/bind";
import style from '~/css/header/Header.module.scss';

const cs = classNames.bind(style)
export default function Header() {
    return (
        <header className={cs('wrapper')}>
            <div className={cs('inner')}></div>
        </header>
    );
}
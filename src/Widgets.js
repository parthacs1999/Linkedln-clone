import React from 'react'
import './Widgets.css';
import { InfoOutlined } from '@material-ui/icons';
import { FiberManualRecordOutlined } from '@material-ui/icons';
function Widgets() {
    const newsArticle = (heading, subtitle) => {
        return (
            <div className="widgets__article">
                <div className="widgets__articleLeft">
                    <FiberManualRecordOutlined />
                </div>
                <div className="widgets__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoOutlined />
            </div>
            {newsArticle("React is back", "Top news - 9099 readers")}
            {newsArticle("Corona is back", "Top news - 800 readers")}
            {newsArticle("Redux too good!", "Top news - 699 readers")}
            {newsArticle("Crypto will crash again?", "Top news -  500 readers")}
        </div>
    )
}

export default Widgets;
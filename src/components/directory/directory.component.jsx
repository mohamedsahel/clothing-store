import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import './directory.styles.scss'

import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from "../../redux/directory/directory.selectors";

const Directory = ({sections}) => {
        return(
            <div className="directory-menu">
                {
                    sections.map(({ id,  ...otherSectionPops }) => (
                        <MenuItem key={id} {...otherSectionPops} />
                    ))
                }
            </div>
        )
    }


const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export default connect(mapStateToProps)(Directory);
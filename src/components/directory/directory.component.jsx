import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from "../../redux/directory/directory.selectors";

import { DirectoryContainer } from "./directory.styles";

const Directory = ({sections}) => {
        return(
            <DirectoryContainer>
                {
                    sections.map(({ id,  ...otherSectionPops }) => (
                        <MenuItem key={id} {...otherSectionPops} />
                    ))
                }
            </DirectoryContainer>
        )
    }


const mapStateToProps = createStructuredSelector({
  sections: selectSections
})

export default connect(mapStateToProps)(Directory);
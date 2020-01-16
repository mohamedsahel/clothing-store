import React from 'react';

import './directory.styles.scss'

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
    constructor() {
        super();
        
        this.state = {
            sections: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: "hats"
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'womens',
                  imageUrl: 'https://cdn.idsitnetwork.net/wp-content/uploads/sites/42/2019/01/flower-shop-fields-of-romance-148245.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                }
              ]
        }

    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id,  ...otherSectionPops }) => (
                        <MenuItem key={id} {...otherSectionPops} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;
import React from 'react';
import Songs from './Songs';
import '../css/edmnav.css'

const EdmNav = ({ songItems, handleAddProduct }) => {
    return (
        <div className="">
            <h1 className='text-center header'>EDM SONGS</h1>
            <div className='products'>
                {songItems.map((songVar, keyVal) => {
                    return (
                        <div key={keyVal}>

                            <Songs
                                imgsrc={songVar.imgsrc}
                                key={keyVal}
                                name={songVar.name}
                                artist={songVar.artist}
                                genre={songVar.genre}
                                price={songVar.price}
                                link={songVar.link}
                                addproduct={() => { handleAddProduct(songVar) }}
                            />
                            {/* <button onClick={() => {handleAddProduct(songVar)}}>Add to Cart</button> */}
                        </div>
                    );
                })
                }
            </div>
        </div>
    );
}

export default EdmNav;
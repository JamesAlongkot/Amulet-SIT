import React from 'react'

function AUctionDetailsrightSidebar() {
    return (
        <div className="col-xl-6 col-lg-5">
            <div className="product-details-right  wow fadeInDown" data-wow-duration="1.5s" data-wow-delay=".2s">
                <h3>Creative Fashion Riboon Digital Watch Little Elegant.</h3>
                <p className="para">Korem ipsum dolor amet, consectetur adipiscing elit. Maece nas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.</p>
                <h4>Bidding Price: <span>$465.00</span></h4>
                <div className="bid-form">
                    <div className="form-title">
                        <h5>Bid Now</h5>
                        <p>Bid Amount : Minimum Bid $20.00</p>
                    </div>
                    <form>
                        <div className="form-inner gap-2">
                            <input type="text" placeholder="$00.00" />
                            <button className="eg-btn btn--primary btn--sm" type="submit">Place Bid</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AUctionDetailsrightSidebar
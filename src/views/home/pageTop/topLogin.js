import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import UserAvatar from '@/assets/images/home/user_avatar.png';

class HomeTopLogin extends Component {
    render() {
        return (
            <div className="user-area">
                <div className="user-photo">
                    <Link to="/personal_center/mine">
                        <img src={UserAvatar} alt=""/>
                    </Link>
                </div>
                <div className="user-name">
                    <div>
                        Hi 李真 您好！
                    </div>
                </div>
                <div className="indent-condition">
                    <div className="indent-condition">
                        <Link to="/personal_center/order">
                            <div className="indent-num">1</div>
                            <div>待收货</div>
                        </Link>
                        <Link to="/personal_center/order">
                            <div className="indent-num">2</div>
                            <div>待发货</div>
                        </Link>
                        <Link to="/personal_center/order">
                            <div className="indent-num">3</div>
                            <div>待付款</div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeTopLogin
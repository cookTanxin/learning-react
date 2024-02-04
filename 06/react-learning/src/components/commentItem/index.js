import {PureComponent} from "react";
import {Comment,Avatar,Tooltip} from 'antd'
import { DeleteOutlined } from '@ant-design/icons';
import dayjs from "dayjs";
class CommentItem extends PureComponent {
    render() {
        let {date} = this.props.comment
        return (
            <div>
                <Comment
                    actions={[<DeleteOutlined onClick={this.deleteInfo} />]}
                    datetime={
                        <Tooltip title={dayjs(date.$d).format('YYYY-MM-DD hh:mm:ss')}>
                            <span>{dayjs(date.$d).format('YYYY-MM-DD hh:mm:ss')}</span>
                        </Tooltip>
                    }
                    avatar={<Avatar src="https://res.wx.qq.com/mpres/en_US/htmledition/comm_htmledition/images/icon/login/mp_enterprise_small6bc3bb.png" alt="Han Solo" />}
                    content={
                        <p>
                            {this.props.comment.content}
                        </p>
                    }
                >

                </Comment>
            </div>
        )
    }
    deleteInfo = () => {
        // 子传父
        this.props.deleteInfo(this.props.id)
    }
}

export default CommentItem

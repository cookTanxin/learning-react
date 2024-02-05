import {PureComponent} from "react";
import CommentInputStyle from './style'
import { Input,Button,message } from 'antd';
import dayjs from "dayjs";
class CommentInput extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // 评论留言
            content:''
        }
    }
    render() {
        return (
            <CommentInputStyle>
                <div className='input-area'>
                    {/*绑定state 数据 使其成为受控组件*/}
                    <Input.TextArea
                        rows={4}
                        value={this.state.content}
                        placeholder='请输入留言'
                        onChange={e => this.changeComment(e)}

                    />
                </div>
                <div className='submit-area'>
                    <Button  disabled={!(this.checkButton())} type='primary' onClick={e => this.submitData()}>提交评论</Button>
                </div>
            </CommentInputStyle>
        )
    }
    // 留言输入事件
    changeComment (e) {
        // 更新视图数据
        this.setState({
            content: e.target.value
        })
    }
    // 提交数据
    submitData () {
        if (!(this.state.content.trim())) {
            message.warn('请输入评价');
            return
        }
        const commentInfo = {
            content:this.state.content,
            date:dayjs()
        }
        this.props.setComment(commentInfo)
        // 清空输入框
        this.setState({
            content:''
        })
    }
    // 判断是否可以点击
    checkButton(){
        return !!this.state.content.trim()
    }
}

export default CommentInput

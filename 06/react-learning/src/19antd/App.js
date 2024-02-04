import {PureComponent} from "react";
// style
import style from './antd.module.scss'
// 导入组件
import CommentInput from '../components/commentInput'
// 评论组件
import CommentItem from "../components/commentItem";
// icon
import { QuestionCircleOutlined } from '@ant-design/icons';
// antd
import {Empty,message,Modal} from 'antd'
class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // 列表数据
            commentList:[]
        }
    }
    render() {
        return (
            <div className={style.antd_content}>
                <h1>antd 使用</h1>
                <div className={style.antd_comment}>
                    <div className={style.antd_comment_list}>
                        {

                            this.state.commentList.length>0 ?this.state.commentList.map((item,index) => {
                                return (
                                    <CommentItem
                                        key={index}
                                        comment={item}
                                        id={index}
                                        deleteInfo={this.deleteInfo}
                                    ></CommentItem>
                                )
                            }):<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<>没有数据~</>}></Empty>
                        }
                    </div>
                    {/*输入框组件*/}
                    <CommentInput setComment={this.setComment.bind(this)}></CommentInput>
                </div>
            </div>
        )
    }
    // 子传父数据 数据不可改变性 需要重新创建一个地址
    setComment(data) {
        this.setState({
            commentList:[...this.state.commentList,data]
        })
    }
    deleteInfo = (id) => {
        // let aee =['a','b','c']
        // aee.splice(3,0,'d','e')
        // console.log(aee)
        Modal.confirm({
            title: '温馨提示',
            icon:<QuestionCircleOutlined />,
            content: '确认删除该条评价吗？',
            onOk: () => {
                const commenrList = [...this.state.commentList]
                commenrList.splice(id,1)
                message.success('删除成功~')
                // 更新视图
                this.setState({
                    commentList:commenrList
                })
            },
            onCancel() {
                console.log('Cancel');
            },
        });

    }
}

export default App

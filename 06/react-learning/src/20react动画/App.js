import {createRef, PureComponent} from "react";

// 导入动画 react-transition-group
import {CSSTransition,SwitchTransition} from 'react-transition-group'
// bootstrap
import {Container, Button, Alert,Form} from 'react-bootstrap';
// css in js
import styled from "styled-components";

import stylecom from './alertCom.module.scss'


import './alert.css'
// classNames={{
//     enter: stylecom['alert-enter'],
//         enterActive: stylecom['alert-enter-active'],
//         exit: stylecom['alert-exit'],
//         exitActive: stylecom['alert-exit-active'],
//         exitDone:stylecom['alert-exit-done'],
//         appear:stylecom['alert-appear'],
//         appearActive:stylecom['alert-appear-active']
// }}

console.log(stylecom)

const ButtonArea = styled.div`
    margin-bottom: 20px;
`

const model = ['out-in','in-out']

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.nodeRef = createRef()
        this.state = {
            showAlert: true,
            showButton: true,
            mode:'out-in'
        }
    }
    render() {
        let {showAlert,showButton,mode} = this.state
        return (
            <>
                <Container style={{paddingTop: '2rem'}}>
                    <h1>CssTransition 是实现css样式之前的展示</h1>
                    <ButtonArea>
                        {
                            showButton && (
                                <Button onClick={e => this.changeDisplay()}>显示盒子</Button>
                            )
                        }

                    </ButtonArea>
                    <CSSTransition
                        in={showAlert}
                        nodeRef={this.nodeRef}
                        timeout={300}
                        appear={true}
                        unmountOnExit={false}
                        classNames='alert'
                        // 可以使用css module
                        // classNames={{
                        //     enter: stylecom['alert-enter'],
                        //     enterActive: stylecom['alert-enter-active'],
                        //     exit: stylecom['alert-exit'],
                        //     exitActive: stylecom['alert-exit-active'],
                        //     exitDone:stylecom['alert-exit-done'],
                        //     appear:stylecom['alert-appear'],
                        //     appearActive:stylecom['alert-appear-active']
                        // }}
                        onExit={() => this.closeAlert()}
                        onEnter={() => this.showAlert()}
                        onEntering={() => this.alertIng()}
                        onExiting={() => this.alertExiting}
                    >
                        <Alert
                            ref={this.nodeRef}
                            variant="primary"
                            dismissible
                            onClose={() => this.setState({showAlert: false})}
                        >
                            <Alert.Heading>
                                Animated alert message
                            </Alert.Heading>
                            <p>
                                This alert message is being transitioned in and
                                out of the DOM.
                            </p>
                            <Button
                                variant="primary"
                                onClick={() => this.setState({showAlert: false})}
                            >
                                Close
                            </Button>
                        </Alert>
                    </CSSTransition>
                </Container>
                <Container>
                    <h1>switchTransition 是实现组件间的切换炫酷动画</h1>
                    <div className='models'>
                        {
                            model.map((item,index) => {
                                return (
                                    <Form.Check
                                    key={item}
                                    id={`mode=msContentScript${item}`}
                                    label={item==='out-in'?'out-in'+'先出去再进入':'in-out'+'先进入再出去'}
                                    type='radio'
                                    name='mode'
                                    checked={mode === item}
                                    value={item}
                                    onChange={ e => this.changeModel(e)}
                                    ></Form.Check>
                                )
                            })
                        }
                    </div>
                    {/*out-in 先出去 再进来 in-out*/}
                    <SwitchTransition mode={this.state.mode}>
                        <CSSTransition key={this.state.mode} timeout={500} classNames='fade'>
                            <>
                                {
                                    this.state.mode === 'in-out'&&<Button variant='warning'>in-out</Button>
                                }
                                {
                                    this.state.mode === 'out-in'&&<Button >out-in</Button>
                                }
                            </>

                        </CSSTransition>
                    </SwitchTransition>
                </Container>
            </>

        )
    }
    // 是否显示
    changeDisplay () {
        this.setState({
            showAlert: true
        })
    }
    componentDidMount() {
        console.log(this.nodeRef)
    }
    // alert 显示了
    showAlert () {
        this.setState({
            showButton: false
        })
    }
    closeAlert() {
        console.log('触发了该函数')
        this.setState({
            showButton: true
        })
    }
    // 动画过度中
    alertIng () {
        console.log('动画过度中')
    }
    // 动画退出过程中
    alertExiting () {
        console.log('动画退出过程中')
    }
    // 切换模式
    changeModel (e) {
        this.setState({
            mode: e.target.value
        })
    }
}

export default App

import { PureComponent, createRef } from "react";
import { Button, Input,message,notification } from "antd";
import stylemoney from "./money.module.scss";
import axios from "axios";
import audiomp from './assets/voice.mp3'
class Money extends PureComponent {
  constructor(props) {
    super(props);
    // audio dom
    this.audioDom = createRef()
    this.state = {
      loadingPriceState: false,
      price: "",
      // 预期价格
      expectationPrice: "",
    };
  }
  render() {
    return (
      <div className={stylemoney.moneymain}>
        <div className={stylemoney.moneyInput}>
          <Input 
          placeholder="请输入期望值" 
          onChange={ e => this.changeExpectation(e)} 
          value={this.state.expectationPrice}
          />
          <div className={stylemoney.comfirmButton}>
            <Button type="primary" style={{'marginRight':'5px'}} disabled={!this.state.expectationPrice} onClick={e => this.runComputedPrice()}>开始运作</Button>
            {this.state.price&&<Button type="danger"  onClick={e => this.stopComputed()}>暂停</Button>}
          </div>
        </div>
        <Button
          value="large"
          type="primary"
          loading={this.state.loadingPriceState}
        >
          {this.state.loadingPriceState ? "价格加载中..." : this.state.price}
        </Button>
        <audio src="/src/20react动画/assets/voice.mp3" ref={this.audioDom}></audio>
      </div>
    );
  }
  // 获取币价格
  getCoinPrice() {
    if(!this.state.expectationPrice) {
        message.info('请输入期望值！')
        return
    }
    this.moneyer = setInterval(async () => {
      this.setState({
        loadingPriceState: true,
      });
      const money = await axios.get("https://price.jup.ag/v4/price?ids=JUP");
      this.setState({
        loadingPriceState: false,
        price: money.data.data.JUP.price,
      });
      this.checkPrice(this.state.price);
    }, 2000);
  }
  // 判断价格是否到 0.49 如果到0.49 就发出语音
  checkPrice(price) {
    if(price<=this.state.expectationPrice) {
        notification.info({
            message:'温馨提示',
            duration:2000,
            description:'快去赚米啊！'
        })
        this.audioDom.current.play()
    }
  }

  changeExpectation(e) {
    this.setState({
        expectationPrice: e.target.value
    })
  }
  // 每隔1秒执行 获取最新价格
  componentDidMount() {
    this.audioDom.current.src = audiomp
    this.getCoinPrice();
  }
  // 开始计算
  runComputedPrice () {
    clearInterval(this.moneyer);
    this.getCoinPrice()
  }
  componentWillUnmount() {
    clearInterval(this.moneyer);
  }
  stopComputed(){
    clearInterval(this.moneyer);
  }
}

export default Money;

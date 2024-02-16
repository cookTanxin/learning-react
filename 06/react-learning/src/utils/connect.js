// // 导入store 使用了context 就不用导入 store
// import store from "../store/index";
// react
import { PureComponent } from "react";

// 导入context createContext() 的目的就是简化状态管理和 props 传递，让组件间的状态共享变得更加简单、直观且易于维护。
import storeContext from './context'

function connect(mapStateToProps, mapDispatchToProps) {
  // 返回一个高阶函数 传入一个组件
  return function handleMapCpn(WrapCOmponent) {
    class ConnectcCpn extends PureComponent {
      constructor(props,context) {
        super(props);
        this.state = {
          storeState: mapStateToProps(context.getState()),
        };
      }
      render() {
        // 在render函数中返回传入的WrappedComponent，并且将所有的状态映射到其props中, 对象结构
        return (
          <WrapCOmponent
            {...this.props}
            {...mapStateToProps(this.context.getState())}
            {...mapDispatchToProps(this.context.dispatch)}
          ></WrapCOmponent>
        );
      }
      // 组件挂载
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
            // 设置全局数据 setState 是异步代码
            this.setState({
                storeState: mapStateToProps(this.context.getState())
            })
        })
      }
      // 组件销毁
      componentWillUnmount() {
        if(this.unsubscribe) {
            this.unsubscribe()
        }
      }
    };
    // 设置contextType 可以访问到共享数据
    ConnectcCpn.contextType = storeContext
    // 返回组件
    return ConnectcCpn
  };
}

//导出connect
export default connect;

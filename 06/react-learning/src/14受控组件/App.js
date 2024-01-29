import React, {Component, PureComponent} from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      gender:'',
      fruits:[],
      country:[]
    }
  }
  render(){
    return (
      <div>
        <h1>受控组件</h1>
        <ul>
          <li>姓名:{this.state.username}</li>
          <li>密码:{this.state.password}</li>
          <li>性别:{this.state.gender}</li>
          <li>品牌:{this.state.fruits.join('*')}</li>
        </ul>
        <form onSubmit={ e => this.submitData(e)}>
          <div>
            <input
              type="text"
              placeholder='请输入姓名'
              name='username'
              value={this.state.username}
              onChange={e => this.saveUsername(e)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder='请输入密码'
              name='password'
              autoComplete={'off'}
              value={this.state.password}
              onChange={e => this.savePassword(e)}
            />
          </div>
          <div>
            <label htmlFor='man'>
              男性
              <input
                type="radio"
                name='gander'
                id='man'
                checked={this.state.gender === 'man'}
                value='man'
                onChange={e => this.changeGender(e)}/>
            </label>
            <label htmlFor='female'>
              女性
              <input
                type="radio"
                name='gander'
                checked={this.state.gender === 'female'}
                id='female'
                onChange={e => this.changeGender(e)}
                value='female'/>
            </label>
          </div>
          <div>
            <label htmlFor="apple">
              apple
              <input
                type="checkbox"
                value='apple'
                id='apple'
                checked={this.state.fruits.includes('apple')}
                onChange={e => this.changeFruits(e)}
              />
            </label>
            <label htmlFor="xiaomi">
              xiaomi
              <input
                type="checkbox"
                value='xiaomi'
                id='xiaomi'
                checked={this.state.fruits.includes('xiaomi')}
                onChange={e => this.changeFruits(e)}
              />
            </label>
            <label htmlFor="huawei">
              huawei
              <input
                type="checkbox"
                value='huawei'
                id='huawei'
                checked={this.state.fruits.includes('huawei')}
                onChange={e => this.changeFruits(e)}
              />
            </label>
          </div>
          <div>
            选择你的国家
            <select multiple={true} name='country' value={this.state.country} onChange={e => this.changeCountry(e)}>
              <option value='china'>中国</option>
              <option value='taiwan'>台湾</option>
              <option value='Japan'>日本</option>
              <option value='Korean'>韩国</option>
            </select>
          </div>
          <button type='submit'>提交数据</button>
        </form>
      </div>
    )
  }

  // 提交数据
  submitData(e) {
    // 阻止默认行为
    e.preventDefault()
    console.log(this.state)
  }

  // 保存用户姓名
  saveUsername(e) {
    this.setState({
      username: e.target.value
    })


  }

  // 保存密码
  savePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  // 改变性别
  changeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }
  // 多选 数据的不可变性
  changeFruits (e) {
    // 浅拷贝数据
    let newFruit = [...this.state.fruits]
    // 没找到 就添加数据
    let fruitIndex = newFruit.indexOf(e.target.value)
    if(fruitIndex === -1) {
      newFruit.push(e.target.value)
      // 如果找到了就删除数据
    } else {
      newFruit.splice(fruitIndex,1)
    }
    // 赋值更新UI
    this.setState({
      fruits: newFruit
    })
  }
  // 选择国家 因为是数组的原因 是引用类型 因为react数据不可变性 需要浅拷贝一份数据
  changeCountry(e) {
    const options = [...e.target.selectedOptions];
    const values = options.map(option => option.value);
    this.setState({
      country: values
    })
  }
}

import React, { Component } from 'react';
import './index.css'

class PictureSelect extends Component {
  constructor(props) {
     super(props)
     this.state = {
         allChose: false,
         ckeckStatus:false
     }
  }
  render() {
    let pictures = this.props.pictures
    let value = this.props.value
    let { allChose } = this.state 
    return (
     <div>
         <div className="selectTitle"><input type="checkbox" checked={allChose}  onChange={(e)=>this.clickAllChose(e)} name="" id=""/>已选中{value.length}个文件</div>
         <div className="pictureList">
            {
                pictures?pictures.map((val,index)=>{
                return <div key={index} className="pictureItem">
                         <div className="itemSelect"><input type="checkbox" checked={val.status}  onChange={(e)=>this.clickCheckbox(val.id,e)} id=""/></div>
                         <img src={val.url} alt=""/>
                       </div>
                }):null
            }
         </div>
     </div>
    );
  }
  
  // 点击其中某一个小项的函数
  clickCheckbox (id,e) {
    let value = this.props.value //获取当前的value值
    let itemStatus = e.target.checked
    if(itemStatus) {
       this.props.pictures.forEach((val,index)=>{
           if(val.id==(id)) {
            val.status = true
            value.push(val.id)
            this.props.onChange(value)
           }
        })
    }else {
        this.props.pictures.forEach((val,index)=>{
            if(val.id==(id)) {
                val.status = false
                value.forEach((item,key)=>{
                    if(item==val.id){
                        value.splice(key,1)
                        this.props.onChange(value)
                    }
                })
            }
            })
    }
    let status = this.props.pictures.every((item,key)=>{return item.status})
    console.log(status,'sdsdsd')
    if(status){
        this.setState({
            allChose:true
        })
    }else {
        this.setState({
            allChose:false
        })
    }
    this.setState({checkStatus:true})
  }

  // 点击全选时调用
  clickAllChose (e) {
    let allChose = e.target.checked
    let value = this.props.value
    if(allChose) {
        console.log("sdsdsd")
        this.props.pictures.forEach((val,index)=>{
            val.status = true
            value = ['1','2','3']
        })
        this.props.onChange(value)
    }else {
        console.log("sdsdsd1")
        this.props.pictures.forEach((val,index)=>{
            val.status = false
            value = []
        })
        this.props.onChange(value)
    }
    this.setState({
        allChose
    })
  }
}

export default PictureSelect;

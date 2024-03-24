import './index.css';
import style from './index.module.css';

// 创建app元素
const app = document.createElement('div');
app.className='app';

// 创建模块css指定的元素
const ele = document.createElement('div');
ele.className=style.container;

document.body.appendChild(app);
document.body.appendChild(ele);
console.log('test');
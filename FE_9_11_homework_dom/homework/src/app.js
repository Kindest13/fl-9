function select(selector) {
	return document.querySelector(selector);
}
const body = select('#root');
const div = select('.addNewAction');
const input = select('.writeNewAction');
const addNewBtn = select('.addNewActionBtn');
const todoList = select('.todoList');
const MAX_ITEMS = 10;
const outLimitMsg = document.createElement('p');
outLimitMsg.setAttribute('class','msgOfLimit');

let countItems = 0;
input.onchange = input.onkeyup = event => {
	const labelText =input.value.trim();
	addNewBtn.disabled = !labelText;
	if(event.code === 'Enter' && labelText) {
		addItem(labelText);
	}
};

outLimitMsg.innerText = 'Maximum item per list are created';
outLimitMsg.style.display = 'none';
div.style.textAlign = 'center';
input.style.width = '50%';
select('.imageCatPaw').style.width = '100px';
select('.headerText').style.textAlign = 'center';
todoList.style.listStyle = 'none';
todoList.style.width = '50%';
todoList.style.margin = '0 auto';
todoList.style.marginBottom = '10%';
select('.imageCatPaw').style.marginLeft = '45%';




addNewBtn.onclick = () => {
  addItem(input.value.trim());
  };

function addItem(labelText) {
	
	const check_icon_outlined = document.createElement('i');
	check_icon_outlined.setAttribute('class','material-icons');
	check_icon_outlined.innerText = 'check_box_outline_blank';
	const label = document.createElement('span');
	label.setAttribute('class','labelText');
	label.innerHTML = labelText;
	label.style.fontSize = '20px';
	const delete_icon = document.createElement('i');
	delete_icon.setAttribute('class','material-icons');
	delete_icon.innerText = 'delete';
	const deleteBtn = document.createElement('button');
	deleteBtn.setAttribute('class','removeItem');
	const checkboxBtn = document.createElement('button');
	checkboxBtn.setAttribute('class','checkbox');
	const liItem = document.createElement('li');
	liItem.setAttribute('class','list-item');
	liItem.style.marginTop = '10px';

	div.appendChild(outLimitMsg);
	checkboxBtn.appendChild(check_icon_outlined);
	deleteBtn.appendChild(delete_icon);
	liItem.appendChild(checkboxBtn);
	liItem.appendChild(label);
	liItem.appendChild(deleteBtn);
	todoList.appendChild(liItem);
	let first_click = true
	checkboxBtn.onclick = () => {
		if(first_click) {
		check_icon_outlined.innerHTML = 'check_box';
		first_click = false;
		} else {
			check_icon_outlined.innerHTML = 'check_box_outline_blank';
		}
	}
	deleteBtn.onclick = () => {
		countItems--;
		liItem.remove();
		input.disabled = false;
		outLimitMsg.style.display = 'none';
	}

	countItems++;
		if(countItems >= MAX_ITEMS) {
			input.disabled = true;
			outLimitMsg.style.display = 'block';
		}
	input.value = '';
	addNewBtn.disabled = true;
}
// Draggable
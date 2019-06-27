setInterval (function() {
	let date = new Date();
	let options = {
		weekday:'long',month:'short',day:'numeric'
	}
	let time = document.getElementById('date');
	let show = date.toLocaleDateString("en-US",options);
	time.innerHTML = show;
	},1000);

//far far 
let list = document.getElementById('list');
let input = document.getElementById('input');
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle";
const LINE_THROUGH = "lineThrough";

function addToDo(toDo,id,done,trash) {	
			if (!toDo){return false;}
			const DONE = done ? CHECK : UNCHECK;
			const LINE = done ? LINE_THROUGH : "";
			let text = `<li class="item">
							<i class="co ${DONE}" job="complete" id="${id}"></i>
							<p class="text ${LINE}">${toDo}</p>
							<i class="de far fa-trash-alt" job="delete" id="${id}"></i>
						</li>`;
			let position = 'beforeend';
			list.insertAdjacentHTML(position,text);
			
}
addToDo();

document.addEventListener('keyup', function (event) {
	if(event.keyCode == 13){
		
			let toDo = input.value;
			
		if(toDo){
			addToDo(toDo,id,false,false);//
			LIST.push({
				name:toDo,
				id:id,
				done:false,
				trash:false
			});console.log(LIST);
		}
		else {
			alert();
		}
		input.value = "";
		id++;
		
	}

});
let id = 0;
// tamoung data ke dalam local setorage
let LIST = [];

// completeToDo far 
function completeToDo(element){
	element.classList.toggle(CHECK);
	element.classList.toggle(UNCHECK);
	element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);
	LIST[element.id].done = LIST[element.id].done ? false : true;
}

//remove todo
function removeToDo(element) {
	element.parentNode.parentNode.removeChild(element.parentNode);
	list[element.id].trash = true;
}
list.addEventListener('click',function (event) {
	let element = event.target; //return cliked
	let elementJob = element.attributes.job.value;// complete or delete
	if (elementJob == "complete"){
		completeToDo(element); // run the function to complete
	}else if(elementJob == "delete"){
		removeToDo(element);
	}
});














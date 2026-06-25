const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	const prices=document.querySelectorAll(".prices");
	let total=0;
	
	prices.forEach(price => {
		total +=parseFloat(price.textContent) || 0;
	});
	const oldAns=document.getElementById("ans");
	if(oldAns){
		oldAns.remove();
	}
	const tr=document.createElement("tr");
	tr.id="ans";
	const td=document.createElement("td");

	
	td.colSpan=2;
	td.textContent=total;

	tr.appendChild(td);

	document.querySelector("table").appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);


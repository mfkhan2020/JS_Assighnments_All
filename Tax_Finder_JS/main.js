function tax_calc() {
    event.preventDefault();
    
const inp1 = Number(document.getElementById("inp1").value);
const inp2 = Number(document.getElementById("inp2").value);
const inp3 = Number(document.getElementById("inp3").value);
const inp4 = Number(document.getElementById("inp4").value);
const inp5 = Number(document.getElementById("inp5").value);


const total_amount = inp1 + inp2 + inp3 + inp4 + inp5;
const total_tax = total_amount * 13 / 100;
const total_bill_wotax = total_amount - total_tax;

document.getElementById("ta").innerHTML = total_amount;
document.getElementById("tt").innerHTML = total_tax;
document.getElementById("tb").innerHTML = total_bill_wotax;

console.log(inp1);
console.log(inp2);
console.log(inp3);
console.log(inp4);
console.log(inp5);
}

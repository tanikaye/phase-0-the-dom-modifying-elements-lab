// Write your code here!
main.remove()

var newHeader = document.createElement("h1");
document.querySelector('div');
newHeader.setAttribute("id","victory");

newHeader.textContent = "Tani Kaye is the champion"

document.body.append(newHeader);




// has a 'newHeader' variable that points to node 'h1#victory'", () => {
//   expect(newHeader.nodeName, "Make sure you create an <h1> with id 'victory'").eql('H1')
// });

// it("has a 'newHeader' variable that points to node 'h1#victory'", () => {
//   expect(newHeader.id, "Make sure you create an <h1> with id 'victory'").eql('victory')
// });

// it("has a 'newHeader' variable that points to node 'h1#victory' with \"YOUR-NAME is the champion\" inside", () => {
//   expect(newHeader.innerHTML, "Make sure you create an <h1> with id 'victory' with a sweet message in it").to.include("is the champion");
// });
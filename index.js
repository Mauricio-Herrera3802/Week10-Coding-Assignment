// Add event when button to add item is click
//
    addBtn.addEventListener('click', () => {
      let orderTable = document.getElementById('orderTable');
      let addBtn = document.getElementById('addBtn');
      let itemName = prompt('Enter Food item to add to Order:');
      let quantity = parseInt(prompt('Enter quantity:'));

      // add and if statement to test if item name is not ' ' and quantity is greater than 0
      //  If true, then add a row to the table with the values obtained in the prompt
      //  If item blank or quantity is less than 1, then a message is displayed requesting to add a valid item name and quantity
      //

      if (itemName !== '' && quantity > 0) {
        const newRow = `
          <tr>
            <td>${itemName}</td>
            <td>${quantity}</td>
        `;
        orderTable.querySelector('tbody').insertAdjacentHTML('beforeend', newRow);
      } else {
        alert('Please enter valid item name and quantity.');
      }
    });

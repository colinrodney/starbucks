//OrderForm handler
document.getElementById('starbucksOrderForm').addEventListener('submit', handleOrderSubmit);

// Example component or script handler - capture order info from orders page
async function handleOrderSubmit(event) {
  event.preventDefault();

  const orderPayload = {
    customer_name: document.getElementById('customerName').value,
    drinkType: document.getElementById('drinkType').value,
    size: document.getElementById('drinkSize').value,
    // instructions: document.getElementById('specialInstructions').value,
  };

  try {
    const response = await fetch('https://gkfykmsmtkzbxzkwxoei.supabase.co/rest/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'sb_publishable_TPr5I48yz4ga-NKU_z5KIg_eASVbzu0',
        'Authorization': 'sb_publishable_TPr5I48yz4ga-NKU_z5KIg_eASVbzu0',
      },
      body: JSON.stringify(orderPayload),
    });

    console.log(orderPayload);
    // const result = await response.json();
    // console.log(result);

    if (!response.ok) {
      // console.log(response)
      // const errorText = await response.text();
      throw new Error(result.error || 'Failed to submit order');
      // throw new Error(`Server returned ${response.status}: ${errorText}`);
    }

    //     // 2. Ensure the content type is JSON before parsing
    // const contentType = response.headers.get("content-type");
    // if (!contentType || !contentType.includes("application/json")) {
    //   const body = await response.text();
    //   throw new Error(`Expected JSON but received: ${body.substring(0, 100)}...`);
    // }

    console.log('Order submitted:');
    alert('Your Starbucks order has been placed!');
    
    // Refresh order list on UI
    // fetchOrders(); 
  } catch (err) {
    console.error('Error submitting order:', err);
  }
}
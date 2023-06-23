$("#add_user").submit(function(event){
    alert("Successfully Inserted!")
})

$('#update_user').submit(function(event){
    event.preventDefault();
    const unindexed_array = $(this).serializeArray();
    const data={};
    $.map(unindexed_array, function(n, index){
        data[n['name']]=n['value'];
    })
    var request = {
        "url" : `http://localhost:5000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })
})
$(document).ready(function() {
    //meets select
    $.ajax({
        url: "https://gotoclusterapi.herokuapp.com/meets/" + sessionStorage.getItem('club'),
        type: "GET",
        dataType: "json",
        success: function(msg) {
            // console.log(msg);
            msg.forEach(function(element) {
                var meetsName = element.name;
                var id = element.id;
                var item = "<option id='" + id + "' value='" + meetsName + "'>" + meetsName + "</option>";

                $('#meetsSelect').append(item);
            }, this);

            // console.log(msg[0].id);
            var firsthackmdID = msg[0].hackmd_id;
            // console.log('https://hackmd.io/' + firsthackmdID);
            $('#hackmd').attr('src','https://hackmd.io/' + firsthackmdID);

            //get hackmd
            $('#meetsSelect').on('change', function() {
                var id = $(this).children(":selected").attr("id");
                // console.log(id);
                $.ajax({
                        url: "https://gotoclusterapi.herokuapp.com/meets/" + sessionStorage.getItem('club') + "/" + id,
                        type: "GET",
                        dataType: "json",
                        success: function(msg) {
                            // console.log(msg);
                            $('#hackmd').attr('src','https://hackmd.io/' + msg.hackmd_id);
                        }
                });
            });

        }
    });
});

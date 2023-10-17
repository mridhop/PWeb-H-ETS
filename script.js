$(document).ready(function() {
    $.ajax({
        url: "http://159.223.51.203:81/api/bio",
        type: "GET",
        dataType: "json",
        success: function(data) {
            // console.log(data);
            parseBio(data);
            $("#cards").removeClass("d-none");
        }
    })
});

function parseBio(data) {
    let output = "";
    $(data).each(function(index, value) {
        const name = value.name;
        const id = value.id;
        output += `
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-primary border-left shadow">
                    <div class="card-body border-primary border-left">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div id="user-id" class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    ${id}
                                </div>
                                <div id="user-name" class="h5 mb-0 font-weight-light">
                                    ${name}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    });
    $("#cards").html(output);
}
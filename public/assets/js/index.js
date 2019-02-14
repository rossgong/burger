

$(document).ready(() => {

	$(".devour").on("click", (event) => {
		var id = $(event.target).data("id");

		console.log(id);

		$.ajax({
			url: "/api/devour/" + id,
			type: "PUT",
		}).then(response => {
			location.reload(true);
		});
	});

	$("#sand-sub").on("click", (event) => {
		event.preventDefault();

		var sandwich = $("#sandwich-name").val();

		$.ajax({
			url: "/api/sandwich",
			type: "POST",
			data: {
				sandwich_name: sandwich
			}
		}).then((response) => {
			location.reload(true);
		});
	})
})
// document.addEventListener("turbolinks:load", function () {
//   let ready = undefined;
//   let set_positions = undefined;
 
//   set_positions = function () {
//     $('div[data-id]').each(function (i) {
//       $(this).attr('data-pos', i + 1);
//     });
//   }
 
//   ready = function () {
//     set_positions();
//     $('.sortable').sortable();
//     $('.sortable').sortable().bind('sortupdate', function (e, ui) {
//       let updated_order;
//       updated_order = [];
//       set_positions();
//       $('div[data-id]').each(function (i) {
//         updated_order.push({
//           id: $(this).data('id'),
//           position: i + 1
//         });
//       });
//       return $.ajax({
//         type: 'PUT',
//         url: '/portfolios/sort',
//         data: {
//           order: updated_order
//         }
//       });
//     });
//     return;
//   }
 
//   $(document).ready(ready);
// });
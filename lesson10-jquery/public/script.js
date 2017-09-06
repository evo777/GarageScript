const chatFile = () => {
  $.get('/file.txt', data => {
    const display = $('#message');
    display.html(data);
  });
};

window.setInterval(chatFile, 1000);

const video = $('#video')[0];
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: false
}).then((media) => {
  video.srcObject = media;
  video.play();
}).catch((err) => {
  console.log('Error: ', err);
});

$('#takePicture').click(() => {
  const name = $('#name').val();
  const comment = $('#comment').val();
  const canvas = $('#canvas')[0];
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0);
  const dataURL = canvas.toDataURL('image/png');
  //Making a POST request when picture is taken
  $.ajax({
    type: 'POST',
    url: '/pictures',
    data: JSON.stringify({
      canvas: dataURL,
      name: name,
      comment: comment
    }),
    success: (data) => {
      console.log('Data: ', data);
    },
    contentType: 'application/json'
  });
});

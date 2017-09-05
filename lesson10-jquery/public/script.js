$('#subButton').click(() => {
  const comment = $('#comment').val();
  const message = $('#message').val();
  $.ajax({
    type: 'POST',
    url: '/submit',
    contentType: 'application/json',
    data: JSON.stringify({
      name,
      message
    }),
    success: (data) => {
      console.log('data: ', data);
    }
  });
});

const chatFile = () => {
  $.get('file.txt', (data) => {
    const content = $('#message').val();
    content.innerHTML = data;
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
  const name = $('#comment').val();
  const message = $('#message').val();

  const canvas = $('#canvas')[0];
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0);
  const dataURL = canvas.toDataURL('image/png');

  //Making a POST request when picture is taken
  $.ajaxx({
    type: 'POST',
    url: '/pictures',
    data: JSON.stringify({
      canvas: dataURL,
      name,
      message
    }),
    success: (data) => {
      console.log('Data: ', data);
    },
    contentType: 'application/json'
  });
});

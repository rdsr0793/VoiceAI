    // Function to fetch playlist data
    function fetchJSON() {
	  fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL9Wi0ZnZNYelkNsbmjuvGx2C-Srh8Q_VJ&maxResults=20&key=AIzaSyBKmQkvMge6Gay395wFO2z8i7DPEcduJt8')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data);
          var output = document.getElementById('title');
          var Ctitle = JSON.stringify(data.items[0].snippet.channelTitle);
          output.innerHTML = "<i class='fa-brands fa-youtube'></i> <h2>"+Ctitle+"</h2>";
		  fetchJSON1();
        })
        .catch(function(error) {
          console.log('Error:', error);
        });
    }
	
	 // Function to fetch channel data  UCcW3vYl7xpprdhHUC4H8HfA
    function fetchJSON1() {
      oauthSignIn();
	  fetch('https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&channelId=UCcW3vYl7xpprdhHUC4H8HfA&key=AIzaSyBKmQkvMge6Gay395wFO2z8i7DPEcduJt8')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data);
          //var subscribers = JSON.stringify(data.items[0].snippet.channelTitle);
          //output.appendChild(subscribers);
        })
        .catch(function(error) {
          console.log('Error:', error);
        });
    }

   




      /*
 * Create form to request access token from Google's OAuth 2.0 server.
 */
function oauthSignIn() {
  // Google's OAuth 2.0 endpoint for requesting an access token
  var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  var form = document.createElement('form');
  form.setAttribute('method', 'GET'); // Send as a GET request.
  form.setAttribute('action', oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  var params = {'client_id': 'UCcW3vYl7xpprdhHUC4H8HfA',
                'redirect_uri': 'index.html',
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/youtube.force-ssl',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'};

  // Add form parameters as hidden input values.
  for (var p in params) {
    var input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', p);
    input.setAttribute('value', params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
}
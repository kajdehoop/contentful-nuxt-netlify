<template>
  <div class="panel">
    <h1 class="bb-logo"><img src="../assets/bucketboost_square.png" alt="" width="169"></h1>
    <h1>Dream it, do it!</h1>
    <p>A bucket list is a list of the things you really want to do at least once in your lifetime. It’s a shame that many of these dreams will never be realized. BucketBoost is an app that matches you with other people, based on your bucket list items. This way you can meet someone who also wants to jump out of an airplane, or climb the highest mountain in Europe. BucketBoost is an app that you can use through the website or on your Android or iOS device.</p>
    <h2>Features</h2>

    <div class="block">
      <div class="block-img">
        <img src="../assets/bucketboost1.png" alt="" width="169" height="300">
      </div>
      <div class="block-content">
        <h3>Matching</h3>
        <p>It can be hard to do something new, especially if you have to do it alone. By connecting people based on their bucket list, they immediately find someone with the same interest and goal so it becomes easy to make this item come true. </p>
        <p>After adding a bucket list item, BucketBoost searches for people around you who have the same item on their list. These people are then displayed underneath your bucket list items. You can now challenge them to go do this bucket list activity together and start a chat to set a meeting time & place.</p>
      </div>
    </div>

    <div class="block block-inverse">
      <div class="block-content">
        <h3>Your bucket list in one location</h3>
        <p>Most bucket lists are not written down, but merely exist in people’s minds. With BucketBoost you can write down your bucket list items and your progress in fulfilling these items in one location. This way you never lose track of your dreams!</p>
      </div>
      <div class="block-img">
        <img src="../assets/bucketboost2.png" alt="" width="169" height="300">
      </div>
    </div>

    <div class="block">
      <div class="block-img">
        <img src="../assets/bucketboost3.png" alt="" width="169" height="300">
      </div>
      <div class="block-content">
        <h3>Inspiration</h3>
        <p>We’ve seen that most of the time people add items to their bucket list when they encounter something cool or when a friend tells them about something they did. That’s why we’ve added an Inspiration page, showing the most popular bucket list items. By tapping an item you can add it to your own list.</p>
      </div>
    </div>

    <div class="block block-inverse">
      <div class="block-content">
        <h3>Viewing the bucket list of your friends</h3>
        <p>It’s a lot of fun to see what your friends are dreaming of doing. By searching someone’s name, you can view their bucket list. If you get inspired by one of their bucket list items, you can click the InstaMatch button to add this item to your own list and instantly match with this person.</p>
      </div>
      <div class="block-img">
        <img src="../assets/bucketboost4.png" alt="" width="169" height="300">
      </div>
    </div>

    <h2>Tech</h2>
    <p>BucketBoost is built using the Javascript framework&nbsp;<a href="https://reactjs.org/">ReactJS</a>. De data is stored in a&nbsp;<a href="https://firebase.google.com/">Firebase</a>&nbsp;backend that communicates with the frontend using&nbsp;<a href="https://nodejs.org/en/">NodeJS</a>&nbsp;. The iOS app consists of a web view built in Swift and Xcode and the Android app is built in Java using Android Studio.</p>
    <a href="http://app.bucketboost.com/" target="_blank">
      <div class="bb-button">Check out the app here!</div>
    </a>	
  </div>
</template>

<script>

export default {
  
};
</script>

<style lang="scss" scoped>

h1{
    font-family: "Baloo Paaji 2", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    text-shadow: none;
}

.bb-logo{
  text-align: center;
}

.bb-button {
  padding: 12px;
  background: #ff6400;
  text-align: center;
  color: white;
  border-radius: 8px;
  width: 220px;
  margin: 20px auto;
}

.block {
  display: flex;
  flex-direction: row;

  .block-img {
    margin: 20px;
    margin-top: 30px;

    img {
      border: 1px solid lightgrey;
      border-radius: 8px;
    }
  }
}

@media only screen and (max-width: 600px) {
  .block {
    flex-direction: column;
  }

  .block-inverse {
    flex-direction: column-reverse !important;
  }
}


</style>
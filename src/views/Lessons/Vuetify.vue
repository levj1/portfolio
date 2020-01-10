<template>
  <div class="home" id="scroll-target">
    <h1>This is an HOME page</h1>

    <div v-scroll:#scroll-target="onScroll">
      <input type="text" />

      <div class="red d-lg-inline">Red box</div>

      <div class="blue d-md-none">Display none on screen md or larger</div>

      <div class="d-flex pa-4">
        <div class="yellow pa-2">yellow flex on lg or larger</div>

        <div class="purple pa-2">purple flex on lg or larger</div>
      </div>

      <h1>Practice Flex</h1>
      <v-card color="d-md-flex pa-2" outlined tile>
        <div class="red">I'm a flexbox container!</div>

        <div class="blue">I'm a flexbox container!</div>
      </v-card>

      <v-card color="d-inline-flex pa-2" outlined tile>
        <div class="red">I'm an inline flex flexbox container!</div>

        <div class="blue">I'm an inline flex flexbox container!</div>
      </v-card>

      <p>
        <span class="red--text text--lighten-4">Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Laudantium ipsam enim architecto quasi, quae odit ea. Voluptate, ipsam excepturi. Eos necessitatibus itaque, aperiam earum repellendus reiciendis hic eveniet? Minus, architecto?
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam enim architecto quasi, quae odit ea. Voluptate, ipsam excepturi. Eos necessitatibus itaque, aperiam earum repellendus reiciendis hic eveniet? Minus, architecto?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam enim architecto quasi, quae odit ea. Voluptate, ipsam excepturi. Eos necessitatibus itaque, aperiam earum repellendus reiciendis hic eveniet? Minus, architecto?</p>
      <h1>Portion 2</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam enim architecto quasi, quae odit ea. Voluptate, ipsam excepturi. Eos necessitatibus itaque, aperiam earum repellendus reiciendis hic eveniet? Minus, architecto?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam enim architecto quasi, quae odit ea. Voluptate, ipsam excepturi. Eos necessitatibus itaque, aperiam earum repellendus reiciendis hic eveniet? Minus, architecto?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam enim architecto quasi, quae odit ea. Voluptate, ipsam excepturi. Eos necessitatibus itaque, aperiam earum repellendus reiciendis hic eveniet? Minus, architecto?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam enim architecto quasi, quae odit ea. Voluptate, ipsam excepturi. Eos necessitatibus itaque, aperiam earum repellendus reiciendis hic eveniet? Minus, architecto?</p>
      <h1>Portion 3</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam enim architecto quasi, quae odit ea. Voluptate, ipsam excepturi. Eos necessitatibus itaque, aperiam earum repellendus reiciendis hic eveniet? Minus, architecto?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam enim architecto quasi, quae odit ea. Voluptate, ipsam excepturi. Eos necessitatibus itaque, aperiam earum repellendus reiciendis hic eveniet? Minus, architecto?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam enim architecto quasi, quae odit ea. Voluptate, ipsam excepturi. Eos necessitatibus itaque, aperiam earum repellendus reiciendis hic eveniet? Minus, architecto?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam enim architecto quasi, quae odit ea. Voluptate, ipsam excepturi. Eos necessitatibus itaque, aperiam earum repellendus reiciendis hic eveniet? Minus, architecto?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam enim architecto quasi, quae odit ea. Voluptate, ipsam excepturi. Eos necessitatibus itaque, aperiam earum repellendus reiciendis hic eveniet? Minus, architecto?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsam enim architecto quasi, quae odit ea. Voluptate, ipsam excepturi. Eos necessitatibus itaque, aperiam earum repellendus reiciendis hic eveniet? Minus, architecto?</p>


      <div class="text-center">
        <h1><v-btn @click="testFunc();">Click</v-btn></h1>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Dropdown</v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data: () => ({
    offsetTop: 0,
    testData: '',
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  }),
  methods:{
    onScroll(e){
      this.offsetTop = e.target.scrollTop;
    },
    testFunc(){
      this.testData = 'test';    }
  }
};
</script>

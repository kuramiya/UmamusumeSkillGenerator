var app = new Vue({
    el: '#app',
    data: {
        bg_type: "white",
        bg_image_src: "image/sample-bg1-700x200.png",

        icon_type: "speed",
        icon_image_src: "image/sample-icon1-200x200-core100.png",

        skill_name: "スキル名",
        skill_point: "100",
        skill_detail: "スキル詳細"
    },

    methods: {
        bg_type_changed: function(){
            if(this.bg_type == "white")
            {
                this.bg_image_src = "image/sample-bg1-700x200.png";
            }
            else if(this.bg_type == "gold")
            {
                this.bg_image_src = "image/sample-bg2-700x200.png";
            }
            else
            {
                this.bg_image_src = "image/sample-bg1-700x200.png";
            }
        },
        icon_type_changed: function(){

        },
     },
  })

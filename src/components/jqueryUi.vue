<template>
  <div class="jqueryUi">
    <div class="container">
      <div id="accordion">
        <h3>Section 1</h3>
        <div>
          <p>Mauris mauris ante, blandit et, ultrices a, susceros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate.</p>
        </div>
        <h3>Section 2</h3>
        <div>
          <p>Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum sit amet purus. Vivamus hendrerit, dolor at aliquet laoreet, mauris turpis porttitor velit, faucibus interdum tellus libero ac justo. Vivamus non quam. In suscipit faucibus urna. </p>
        </div>
        <h3>Section 3</h3>
        <div>
          <p>Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui. </p>
          <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
        </div>
      </div>
      <div class="dataPicker">
        <p>日期：<input type="text" id="datepicker" size="30">&nbsp;<input type="text" id="alternate" size="30"></p>
        <p>动画：<br />
          <select id="anim" class="anim">
            <option value="show">Show (默认)</option>
            <option value="slideDown">滑下</option>
            <option value="fadeIn">淡入</option>
            <option value="blind">Blind (UI 百叶窗特效)</option>
            <option value="bounce">Bounce (UI 反弹特效)</option>
            <option value="clip">Clip (UI 剪辑特效)</option>
            <option value="drop">Drop (UI 降落特效)</option>
            <option value="fold">Fold (UI 折叠特效)</option>
            <option value="slide">Slide (UI 滑动特效)</option>
            <option value="">无</option>
          </select>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jqueryUi',
  mounted (){
    this.datePicker()
  },
  methods:{
    datePicker () {
      $( "#accordion" ).accordion({
        heightStyle: "content"
      });
      $( "#datepicker" ).datepicker({
        showButtonPanel: true,
        altField: "#alternate",
        altFormat: "DD, d MM, yy",
        showWeek: true,
        firstDay: 1
      });
      $( "#anim" ).change(function() {
        $( "#datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
      });
    }
  },
  computed:{

  }
}
</script>

<style lang="less" rel="stylesheet/less">
  .dataPicker {
    margin-top: 20px;
    p {
      margin-top: 10px;
    }
  }
</style>

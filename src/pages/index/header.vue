<template>
    <div class="header">
        <div class="back iconfont">&#xe600;</div>
        <div class="search iconfont">
            <span class="search-icon">&#xe668;</span>
            请输入内容
        </div>
        <div class="city iconfont">乌鲁木齐</div>
    </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="stylus" scoped>
    @import "../../assets/stylus/varibles.styl"

    .header
        display: flex
        height: 0.88rem
        line-height: 0.88rem
        background: $bgColor
        color: #fff
        .back
            width: .58rem
            text-align: center
            font-size: .4rem
            font-weight: bold
        .search
            flex: 1
            height: 0.6rem
            line-height: 0.6rem
            margin: 0.14rem 0.2rem
            padding-left: .4rem
            background: #fff
            border-radius: .1rem
            color: #ccc
            .search-icon
                position: relative
                top: .02rem
                padding-right: .04rem
        .city
          padding-right: 0.6rem
          position: relative
          &:before
            position: absolute
            top: .34rem
            right: .1rem
            content: ""
            width: 0
            height: 0
            border-left: .14rem solid transparent
            border-right: .14rem solid transparent
            border-top: .14rem solid white
</style>

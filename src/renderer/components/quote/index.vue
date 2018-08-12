<template>
 <div>
 <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="tab_quote">{{tabNames[0]}}</el-menu-item>
  <el-menu-item index="tab_trade" >{{tabNames[1]}}</el-menu-item>
  <el-menu-item index="tab_open_account" >{{tabNames[2]}}</el-menu-item>
  <el-submenu index="tab_mysettings">
    <template slot="title">{{tabNames[3]}}</template>
    <el-menu-item index="mysettings_psw">{{mysettings[0]}}</el-menu-item>
    <el-menu-item index="mysettings_adr">{{mysettings[1]}}</el-menu-item>
    <el-menu-item index="mysettings_suggestion">{{mysettings[2]}}</el-menu-item>
  </el-submenu>
</el-menu>
<div class="line"></div>
 <h1>{{head}}</h1>
 <p>{{content}}</p>
 <p>{{content1}}</p>
 <p>{{content2}}</p>
 <p>{{content3}}</p>
 </div>
</template>
<script src='./index.js'/>

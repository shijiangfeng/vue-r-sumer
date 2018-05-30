<template>
    <div>
        <h2>个人信息</h2>
        <el-form>
            <el-form-item label="姓名">
                <el-input v-model="items.name"></el-input>
            </el-form-item>
            <el-form-item label="城市">
                <el-input v-model="items.city"></el-input>
            </el-form-item>
            <el-form-item label="手机">
                <el-input v-model="items.phone"></el-input>
            </el-form-item>
            <el-form-item label="Date of Birth">
                <el-input v-model="items.bitrh"></el-input>
            </el-form-item>
            <el-form-item label="E-mail">
                <el-input v-model="items.email"></el-input>
            </el-form-item>
            <el-form-item label="wechat">
                <el-input v-model="items.wechat"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  props: ["items"]
};
</script>   
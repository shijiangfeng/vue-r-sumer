<template>
    <div>
        <h2>自我评价</h2>
        <el-form>
            <el-form-item label="--------------------">
                <el-input type="textarea" :rows="20" placeholder="请输入内容" v-model="items.evaluate">
                </el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  props: ["items"]
};
</script>   
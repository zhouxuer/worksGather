<template>
  <div class="bj">
    <div class="foltBg">
      <Form class="formWidth" ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
        <FormItem label="Name" prop="name">
          <Input class="inputColor" v-model="formCustom.name" placeholder="Enter your name"/>
        </FormItem>
        <FormItem label="Password" prop="passwd">
            <Input type="password" v-model="formCustom.passwd" placeholder="Enter your password"/>
        </FormItem>
        <FormItem label="Confirm" prop="passwdCheck">
            <Input type="password" v-model="formCustom.passwdCheck"/>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">Submit</Button>
            <Button @click="handleReset('formCustom')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
  
<script>
  export default {
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your password'));
        } else {
          if (this.formCustom.passwdCheck !== '') {
              // 对第二个密码框单独验证
              this.$refs.formCustom.validateField('passwdCheck');
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your password again'));
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('The two input passwords do not match!'));
        } else {
          callback();
        }
      };
      return {
        formCustom: {
          name: '',
          passwd: '',
          passwdCheck: ''
        },
        ruleCustom: {
          name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
          ],
          passwd: [
            { required: true,validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('欢迎来到首页!');
            this.pageJump()
          } else {
            this.$Message.error('Fail!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      },
      pageJump() {
         this.$router.push({name: 'navigation'});
      }
    }
}
</script>

<style slot-scope>
  .bj {
    position: fixed;
    width: 100%;
    height: 100%;
    background-image: url("~static/images/bj1.jpg");
    background-size:cover;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }
  .foltBg {
    width: 30%;
    padding: 40px 20px;
    border-radius: 15px;
    background-color: rgba(46, 94, 148,0.5);
  }
  .formWidth {
    width: 500px;
  }
  .ivu-form .ivu-form-item-label {
    color: aliceblue;
  }
</style>
import { Button, Flex, Form, Input, Modal } from "antd";
import "../../style/Login.scss";

export const LoginModal = (modalLoginOpen) => {
  const onFinish = (values) => {
    console.log("Success: ", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed: ", errorInfo);
  };
  return (
    <Modal
      title="Welcome to shop app"
      open={modalLoginOpen}
      className="login-modal"
      header={null}
      footer={null}
    >
      <Flex>
        <div className="left">
          <Form
            name="login"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="Email"
              rules={[{ required: true, message: "Email@mail.com" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button className="login-button" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="right">
          <div className="content">
            <h1>Shop App</h1>
            <svg
              width="150"
              height="120"
              viewBox="0 0 133 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shopify-icon"
            >
              <path
                d="M116.449 29.0682C116.403 28.7432 116.244 28.4444 116 28.2236C115.756 28.0028 115.442 27.8737 115.112 27.8586C114.504 27.8586 103.793 27.6167 103.793 27.6167C103.793 27.6167 97.2236 21.3206 94.7885 18.8983V149.758L133 140.323C133 140.323 116.571 29.794 116.449 29.0682ZM86.1484 18.8983C85.5648 17.0668 84.8317 15.2858 83.9565 13.573C80.7826 7.52186 76.046 4.24077 70.4461 4.24077C70.0371 4.22663 69.6281 4.26732 69.23 4.36173C69.1084 4.1198 68.8652 3.99884 68.7436 3.75692C66.3115 1.10483 63.1498 -0.104794 59.3739 0.00709599C52.0776 0.24902 44.7812 5.45039 38.929 14.7735C34.7913 21.3115 31.6326 29.543 30.7753 35.96C22.3785 38.5002 16.5384 40.3177 16.4167 40.4387C12.1606 41.7692 12.0359 41.8902 11.5525 45.8819C11.1877 48.906 0 134.13 0 134.13L91.9885 150V17.4468C91.5408 17.4636 91.0943 17.5039 90.6509 17.5678C90.6509 17.5678 88.9484 18.0516 86.1484 18.8983ZM69.3547 24.1058C64.4905 25.5573 59.1307 27.2508 53.8986 28.8263C55.3579 23.135 58.2795 17.4468 61.6875 13.706C63.0251 12.3755 64.8522 10.7999 66.9195 9.83224C68.9899 14.1778 69.4763 20.111 69.3547 24.1058ZM59.3739 4.97864C60.9068 4.93057 62.4235 5.30302 63.7578 6.0552C61.8121 7.02289 59.8634 8.59842 58.0393 10.4129C53.4152 15.3783 49.8856 23.1139 48.4264 30.5077C44.0425 31.8413 39.6617 33.1719 35.6578 34.3815C38.3209 22.7722 48.1771 5.22056 59.3739 4.97864ZM45.2585 71.5592C45.745 79.3037 66.3115 81.0002 67.5276 99.2776C68.3788 113.684 59.8603 123.488 47.5691 124.217C32.7241 125.185 24.5704 116.469 24.5704 116.469L27.7321 103.164C27.7321 103.164 35.8858 109.339 42.4586 108.855C46.7148 108.613 48.3017 105.102 48.1771 102.68C47.5691 92.5128 30.7753 93.1176 29.6809 76.4128C28.708 62.3691 37.9561 48.2074 58.4011 46.8738C66.3054 46.39 70.3275 48.3284 70.3275 48.3284L65.7035 65.7469C65.7035 65.7469 60.4714 63.3277 54.2634 63.8115C45.2585 64.4194 45.1369 70.1046 45.2585 71.5592ZM74.2219 22.6512C74.2219 19.0223 73.7355 13.8149 72.03 9.45725C77.6299 10.5459 80.3053 16.715 81.5244 20.4739C79.3334 21.0787 76.8993 21.8045 74.2219 22.6512Z"
                fill="#866C0C"
              />
            </svg>
          </div>
        </div>
      </Flex>
    </Modal>
  );
};

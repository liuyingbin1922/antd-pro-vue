import { Layout, Icon } from "ant-design-vue";
import GlobalFooter from '@/components/GlobalFooter';
const { Footer } = Layout;
const FooterView = {
    render(){
        return (
            <Footer style={{ padding: 0 }}>
              <GlobalFooter
                links={[
                  {
                    key: 'Pro 首页',
                    title: 'Pro 首页',
                    blankTarget: true,
                  },
                ]}
                copyright={
                  <div>
                    Copyright <Icon type="copyright" />
                  </div>
                }
              />
            </Footer>
          );
    }
}
export default FooterView;

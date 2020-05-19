import * as React from 'react';
import { RootProps } from './InstallerApp';
import { Button, Input, Form, Justify, Segment, Text } from '@tencent/tea-component';
import { validateActions } from '../actions/validateActions';
import { getValidateStatus } from '../../common/utils/getValidateStatus';

interface EditingItemProps extends RootProps {
  id?: string | number;
}

const list = [
  { name: '密码认证', value: 'password' },
  { name: '密钥认证', value: 'cert' }
];

export class EditingItem extends React.Component<EditingItemProps> {
  render() {
    const { id, editState, actions } = this.props,
      { machines } = editState;
    const machine = machines.find(m => m.id === id);
    return (
      <div className="run-docker-box" style={{ width: '100%', backgroundColor: '#f2f2f2' }}>
        <Justify
          right={
            <section>
              <Button
                tooltip="保存"
                type="link"
                onClick={() => {
                  const canSave = validateActions._validateMachine(machine);
                  actions.validate.validateMachine(machine);
                  if (canSave) {
                    actions.installer.updateMachine({ status: 'edited' }, id);
                  }
                }}
              >
                <i className="icon-submit-gray" />
              </Button>
              <Button
                disabled={machines.length === 1}
                tooltip={machines.length === 1 ? '不可删除，至少指定一台机器' : '删除'}
                type="link"
                onClick={() => actions.installer.removeMachine(id)}
              >
                <i className="icon-cancel-icon" />
              </Button>
            </section>
          }
        />
        <Form>
          <Form.Item
            label="访问地址"
            required
            status={getValidateStatus(machine.v_host)}
            message={machine.v_host.message}
          >
            <Input
              placeholder="请输入目标机器访问地址"
              value={machine.host}
              onChange={value => actions.installer.updateMachine({ host: value }, id)}
            />
            <Text theme="text">注意：要求当前运行安装器所在设备网络可达目标机器；支持输入多个机器IP，用“;”分隔</Text>
          </Form.Item>
          <Form.Item
            label="SSH端口"
            required
            status={getValidateStatus(machine.v_port)}
            message={machine.v_port.message}
          >
            <Input
              style={{ width: '80px' }}
              value={machine.port}
              onChange={port => actions.installer.updateMachine({ port }, id)}
            />
          </Form.Item>
          <Form.Item>
            <Segment
              options={[
                { text: '密码认证', value: 'password' },
                { text: '密钥认证', value: 'privateKey' }
              ]}
              value={machine.authWay}
              onChange={value => actions.installer.updateMachine({ authWay: value }, id)}
            />
          </Form.Item>
          <Form.Item
            label="用户名"
            required
            status={getValidateStatus(machine.v_user)}
            message={machine.v_user.message}
          >
            <Input
              placeholder="请输入特权用户名"
              value={machine.user}
              onChange={user => actions.installer.updateMachine({ user }, id)}
            />
          </Form.Item>
          <Form.Item
            label={machine.authWay === 'privateKey' ? '私钥密码' : '密码'}
            required={machine.authWay === 'privateKey' ? false : true}
            status={getValidateStatus(machine.v_password)}
            message={machine.v_password.message}
          >
            <Input
              type="password"
              value={machine.password}
              onChange={password => actions.installer.updateMachine({ password }, id)}
            />
          </Form.Item>
          <Form.Item
            label="私钥"
            required
            status={getValidateStatus(machine.v_privateKey)}
            message={machine.v_privateKey.message}
            style={{
              display: machine.authWay === 'privateKey' ? 'table-row' : 'none'
            }}
          >
            <Input
              value={machine.privateKey}
              multiline
              style={{ width: '400px' }}
              onChange={privateKey => actions.installer.updateMachine({ privateKey }, id)}
            />
          </Form.Item>
        </Form>
      </div>
    );
  }
}

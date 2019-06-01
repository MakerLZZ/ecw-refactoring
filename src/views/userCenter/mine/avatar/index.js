import React, { Component } from 'react';
import './index.less';
import DefaultAvatar from '@/assets/images/mine/defAvatar.png';

import { Upload, Button, Icon, message } from 'antd';
// import reqwest from 'reqwest';

export default class AvatarModel extends Component {
	state = {
		fileList: [],
		uploading: false,
		preAvatar: DefaultAvatar
	};

	handleUpload = () => {
		const { fileList } = this.state;
		const formData = new FormData();
		fileList.forEach((file) => {
			formData.append('files[]', file);
		});

		this.setState({ uploading: true });

		// You can use any AJAX library you like
		// reqwest({
		//     url: '//jsonplaceholder.typicode.com/posts/',
		//     method: 'post',
		//     processData: false,
		//     data: formData,
		//     success: () => {
		//         console.log("???")
		//         this.setState({fileList: [], uploading: false,preAvatar:DefaultAvatar});
		//         message.success('上传成功！');
		//     },
		//     error: () => {
		//         this.setState({uploading: false});
		//         message.error('上传失败！');
		//     }
		// });
	};

	getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	render() {
		const { uploading } = this.state;
		const props = {
			action: '//jsonplaceholder.typicode.com/posts/',
			onRemove: (file) => {
				this.setState(({ fileList }) => {
					const index = fileList.indexOf(file);
					const newFileList = fileList.slice();
					newFileList.splice(index, 1);
					return { fileList: newFileList };
				});
				this.setState({
					preAvatar: DefaultAvatar
				});
			},
			beforeUpload: (file) => {
				var oldFileList = this.state.fileList;
				oldFileList = [];
				const isType = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
				if (!isType) {
					message.error('仅支持JPG、GIF、PNG图片文件!');
				}
				const isLt2M = file.size / 1024 / 1024 < 2;
				if (!isLt2M) {
					message.error('文件大小小于 2MB!');
				}
				if (isType && isLt2M) {
					this.getBase64(file, (preAvatar) => this.setState({ preAvatar }));
					oldFileList.push(file);
					this.setState({
						fileList: oldFileList
					});
				}
				return false;
			},
			fileList: this.state.fileList
		};

		return (
			<div className="avatar-box">
				<div className="box_row">
					<div>
						<Upload {...props}>
							<Button>
								<Icon type="upload" />
								选择文件
							</Button>
						</Upload>
					</div>
				</div>
				<div className="box_row tips">
					<div>您上传的头像会自动生成三种尺寸,</div>
					<div>请注意中小尺寸的头像是否清晰</div>
				</div>
				<div className="box_row">
					<div className="row">
						<div>
							<img id="preview1" src={this.state.preAvatar} alt="" />
						</div>
						<div className="img-size">大尺寸头像，160x160像素</div>
					</div>
					<div className="row row_col">
						<div className="img-row">
							<img id="preview2" src={this.state.preAvatar} alt="" />
						</div>
						<div className="img-size">
							<div>中尺寸头像</div>
							<div>60x60像素</div>
						</div>
						<div className="img-row">
							<img id="preview3" src={this.state.preAvatar} alt="" />
						</div>

						<div className="img-size">
							<div>小尺寸头像</div>
							<div>30x30像素</div>
						</div>
					</div>
				</div>
				<div>
					<Button
						type="primary"
						onClick={this.handleUpload}
						disabled={this.state.fileList.length === 0}
						loading={uploading}
					>
						{uploading ? '正在保存' : '保存'}
					</Button>
				</div>
			</div>
		);
	}
}

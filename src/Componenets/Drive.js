import React from 'react'
import './Drive.css'
import { Icon } from '@iconify/react';
import img from "../Assets/images/home/profile.jpg";
import img4 from '../Assets/images/home/doc1.png';
import img5 from '../Assets/images/home/doc2.png';
import img6 from '../Assets/images/home/pdf2.png';
import img7 from '../Assets/images/home/pdf3.png';
import img8 from '../Assets/images/home/ms-word.png';
import img9 from '../Assets/images/home/ms-word3.png';
import img29 from '../Assets/images/home/pic1.png'
import img30 from '../Assets/images/home/pic2.png'
import img31 from '../Assets/images/home/pic3.png'
import img32 from '../Assets/images/home/pic4.png'
import { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



export default function Home() {

    const [show, setShow] = useState(false);
    const [insertlinkshow, setInsertlinkShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [open, setOpen] = useState(false);
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
                console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handler);


        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });
    return (
        <>
            <section className='home-sec'>

                <div className='home-1 menu-container' ref={menuRef}>

                    <div className='home-1-a menu-trigger' onClick={() => { setOpen(!open) }}>
                        <h6>My Drive</h6>
                        <Icon className='icon-1' icon="ci:caret-down" />
                    </div>
                    <div className={`Drop ${open ? 'active' : 'inactive'}`} >
                        <ul>
                            <div className='list1'>
                                <Icon className='icon-2' icon="material-symbols:create-new-folder-outline" />
                                <li>New Folder</li>
                            </div>
                            <div className='list1'>
                                <Icon className='icon-2' icon="ic:baseline-upload-file" />
                                <li>File Upload</li>
                            </div>
                            <div className='list1'>
                                <Icon className='icon-2' icon="material-symbols:drive-folder-upload-outline" />
                                <li>Folder Upload</li>
                            </div>

                            <div className='Docs'>

                                <div className='list1'>
                                    <div className='list-1-a'>
                                        <img src={img29} alt="" />
                                    </div>
                                    <li>Docs</li>
                                </div>
                                <div className='list2'>
                                    <div className='list-2-a'></div>
                                    <Icon className='icon-2' icon="grommet-icons:form-next" />
                                </div>

                            </div>
                            <div className='Docs'>

                                <div className='list1'>
                                    <div className='list-1-a'>
                                        <img src={img30} alt="" />
                                    </div>
                                    <li>Sheets</li>
                                </div>
                                <div className='list2'>
                                    <div className='list-2-a'></div>
                                    <Icon className='icon-2' icon="grommet-icons:form-next" />
                                </div>

                            </div>
                            <div className='Docs'>

                                <div className='list1'>
                                    <div className='list-1-a'>
                                        <img src={img31} alt="" />
                                    </div>
                                    <li>Slides</li>
                                </div>
                                <div className='list2'>
                                    <div className='list-2-a'></div>
                                    <Icon className='icon-2' icon="grommet-icons:form-next" />
                                </div>

                            </div>
                            <div className='Docs'>

                                <div className='list1'>
                                    <div className='list-1-a'>
                                        <img src={img32} alt="" />
                                    </div>
                                    <li>Forms</li>
                                </div>
                                <div className='list2'>
                                    <div className='list-2-a'></div>
                                    <Icon className='icon-2' icon="grommet-icons:form-next" />
                                </div>

                            </div>
                            <div className='list1'>
                                <li>More</li>
                            </div>

                        </ul>
                    </div>

                    <div className='home-1-b'>


                        <Icon className='icon-1' icon="fe:insert-link" />

                        <Icon className='icon-1' icon="prime:user-plus" onClick={() => setInsertlinkShow(true)} />
                        <Modal
                            size="lg"
                            show={insertlinkshow}
                            onHide={() => setInsertlinkShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Share “Getting started”
                                    <Icon icon="ic:sharp-help-outline" className='Share__header__icon' />
                                    <Icon icon="ep:setting" />
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body className='share__model'>
                                <div className='Add__people__togroup'>
                                    <span>Add people and groups</span>
                                    <div className='share__Editor'>
                                        <DropdownButton title="Editor">
                                            <Dropdown.Item href="#/action-1">Viewer</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Editor</Dropdown.Item>
                                        </DropdownButton>
                                    </div>
                                </div>
                                <div className='self__Account'>
                                    <img src={img} alt="" className='self__Account__img' />
                                    <div class="profile__heading">
                                        <h5>Madam Rabia</h5>
                                        <small>madamrabia123@gamil.com</small>
                                    </div>
                                    <div className='owner'>
                                        <h5>Owner</h5>
                                    </div>
                                </div>

                                <div className='Acess__heading'>
                                    <h5>People with Access</h5>
                                </div>
                                <div className='Access__Account'>
                                    <img src={img} alt="" className='self__Account__img' />
                                    <div class="profile__heading">
                                        <h5>Madam Rabia</h5>
                                        <small>madamrabia123@gamil.com</small>
                                    </div>
                                </div>

                                <div className='General__section'>
                                    <div className='General__heading'>
                                        <h5>General access</h5>
                                    </div>

                                    <div className='General__Account'>
                                        <div class="General__profile__heading">
                                            <div className='lock'>
                                                <Icon icon="ic:outline-lock" className='lock__icon' color="#9b9b9b" width="25" />
                                            </div>
                                            <div className='Res'>
                                                <h5>Restricetrd </h5>
                                                <small>only admin with access can open wiht the link</small>
                                            </div>
                                        </div>
                                        <div>
                                            <Icon icon="ci:caret-down" className='general__icon' />
                                        </div>
                                    </div>
                                </div>

                                <div className='general__footer'>
                                    <button className='general__btn1'><Icon icon="fe:insert-link" className='generalbtn__icon' />Copy link</button>
                                    <button className='general__btn2'>Done</button>
                                </div>

                            </Modal.Body>
                        </Modal>

                        <Icon className='icon-1' icon="octicon:trash-24" onClick={handleShow} />
                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                                <Modal.Title>Delete forever?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>“Folder” will be deleted forever and you won’t be able to restore it.</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" className="modal__btn modal__btn1" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button variant="primary" className="modal__btn modal__btn2" onClick={handleClose}>
                                    Delete forever
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Icon className='icon-1' icon="bx:dots-vertical-rounded" />
                        <div className='home-b-1'></div>
                        <Icon className='icon-1' icon="eva:list-fill" />
                        <Icon className='icon-1' icon="fluent:info-20-regular" />

                    </div>
                </div>

                <div className='home-2'>
                    <h6>Suggested</h6>

                    <div className='home-2-i'>

                        <div className='home-2-a'>
                            <img className='home-img1' src={img4} alt="" />
                            <div className='home-2-b'>
                                <img src={img5} alt="" />
                                <p>Research #1</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img2' src={img6} alt="" />
                            <div className='home-2-b'>
                                <img src={img7} alt="" />
                                <p>Theory #2</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img3' src={img9} alt="" />
                            <div className='home-2-b'>
                                <img src={img8} alt="" />
                                <p>Result #3</p>
                            </div>
                        </div>

                    </div>

                </div>


                <div className='home-3'>
                    <h6>Folder</h6>
                    <div className='home-3-i'>

                        <div className='home-3-a'>
                            <Icon className='home-img' icon="bi:folder2-open" />
                            <p>Slides</p>
                        </div>
                        <div className='home-3-a'>
                            <Icon className='home-img' icon="bi:folder2-open" />
                            <p>Classroom</p>
                        </div>
                        <div className='home-3-a'>
                            <Icon className='home-img' icon="bi:folder2-open" />
                            <p>Home</p>
                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}
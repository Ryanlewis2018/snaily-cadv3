import * as React from "react";
import lang from "../../language.json";
import User from "../../interfaces/User";
import { Item, Span } from "../../pages/citizen/citizen-info";

interface Props {
  members: User[];
}

const AllMembersTab: React.FC<Props> = ({ members }) => {
  return (
    <>
      <h3 className="mb-2 mt-4">{lang.admin.all_members}</h3>
      <ul className="list-group">
        {members.map((member: User, idx: number) => {
          return (
            <li
              key={idx}
              className="list-group-item bg-dark border-secondary d-flex justify-content-between"
            >
              <div>
                {++idx} | {member.username}
                <div className="collapse mt-2" id={`member_info_${member.id}`}>
                  <Item id="rank">
                    <Span>{lang.global.rank}: </Span>
                    {member.rank}
                  </Item>
                  <Item id="leo">
                    <Span>{lang.auth.account.police_access}: </Span>
                    {member.leo}
                  </Item>
                  <Item id="dispatch">
                    <Span>{lang.auth.account.dispatch_access}: </Span>
                    {member.dispatch}
                  </Item>
                  <Item id="ems_fd">
                    <Span>{lang.auth.account.ems_fd_access}: </Span>
                    {member.ems_fd}
                  </Item>
                  <Item id="tow">
                    <Span>{lang.auth.account.tow_access}: </Span>
                    {member.tow}
                  </Item>
                  <Item id="rank">
                    <Span>{lang.auth.account.ems_fd_access}: </Span>
                    {member.ems_fd}
                  </Item>
                  <Item id="rank">
                    <Span>{lang.auth.account.banned}: </Span>
                    {member.banned} <br />
                    {member.banned === "1" && (
                      <>
                        <Span>{lang.auth.account.ban_reason}: </Span>
                        {member.ban_reason}
                      </>
                    )}
                  </Item>
                </div>
              </div>

              <div>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#member_info_${member.id}`}
                  aria-expanded="false"
                  aria-controls={`member_info_${member.id}`}
                >
                  {lang.admin.toggle_info}
                </button>
                <a className="btn btn-success ms-2" href={`/admin/manage/members/${member.id}`}>
                  {lang.admin.manage_perms}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AllMembersTab;

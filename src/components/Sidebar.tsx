import { useState } from 'react';
import { ChevronRight, Folder, File } from 'lucide-react';
import type { FileItem } from '../data/portfolioData';

interface SidebarProps {
  files: FileItem[];
  onFileClick: (file: FileItem) => void;
}

const Sidebar = ({ files, onFileClick }: SidebarProps) => {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['portfolio']));

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId);
    } else {
      newExpanded.add(folderId);
    }
    setExpandedFolders(newExpanded);
  };

  const renderFileItem = (item: FileItem, depth = 0) => {
    const isExpanded = expandedFolders.has(item.id);
    const paddingLeft = depth * 16 + 16;

    return (
      <div key={item.id}>
        <div 
          className={`file-item ${item.type}`}
          style={{ paddingLeft }}
          onClick={() => {
            if (item.type === 'folder') {
              toggleFolder(item.id);
            } else {
              onFileClick(item);
            }
          }}
        >
          {item.type === 'folder' && (
            <div className={`folder-toggle ${isExpanded ? 'expanded' : ''}`}>
              <ChevronRight size={12} />
            </div>
          )}
          
          <div className="file-icon">
            {item.type === 'folder' ? (
              <Folder size={16} className="folder-icon" />
            ) : (
              <File size={16} />
            )}
          </div>
          
          <span className="file-name">{item.name}</span>
        </div>
        
        {item.type === 'folder' && isExpanded && item.children && (
          <div>
            {item.children.map(child => renderFileItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        Portfolio Explorer
      </div>
      <div className="sidebar-content">
        <div className="file-explorer">
          {files.map(file => renderFileItem(file))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
